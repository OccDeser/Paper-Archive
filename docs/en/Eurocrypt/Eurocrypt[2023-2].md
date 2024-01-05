# Eurocrypt[2023-2]
## New Ways to Garble Arithmetic Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits)
### Authors
* Marshall Ball, New York University, New York, USA
* Hanjun Li, University of Washington, Seattle, USA
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, Peking University, Beijing, China
### Abstract
> The beautiful work of Applebaum, Ishai, and Kushilevitz [FOCS’11] initiated the study of arithmetic variants of Yao’s garbled circuits. An arithmetic garbling scheme is an efficient transformation that converts an arithmetic circuit \(C: \mathcal {R}^n \rightarrow \mathcal {R}^m\) over a ring \(\mathcal {R}\) into a garbled circuit \(\widehat{C}\) and n affine functions \(L_i\) for \(i \in [n]\), such that \(\widehat{C}\) and \(L_i(x_i)\) reveals only the output C(x) and no other information of x. AIK presented the first arithmetic garbling scheme supporting computation over integers from a bounded (possibly exponentially large) range, based on Learning With Errors (LWE). In contrast, converting C into a Boolean circuit and applying Yao’s garbled circuit treats the inputs as bit strings instead of ring elements, and hence is not “arithmetic”.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_1](https://doi.org/10.1007/978-3-031-30617-4_1)
## Actively Secure Half-Gates with Minimum Overhead Under Duplex Networks.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks)
### Authors
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> Actively secure two-party computation (2PC) is one of the canonical building blocks in modern cryptography. One main goal for designing actively secure 2PC protocols is to reduce the communication overhead, compared to semi-honest 2PC protocols. In this paper, we propose a new actively secure constant-round 2PC protocol with one-way communication of \(2\kappa +5\) bits per AND gate (for \(\kappa \)-bit computational security and any statistical security), essentially matching the one-way communication of semi-honest half-gates protocol. This is achieved by two new techniques:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_2](https://doi.org/10.1007/978-3-031-30617-4_2)
## Black-Box Reusable NISC with Random Oracles.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, US
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> We revisit the problem of reusable non-interactive secure computation (NISC). A standard NISC protocol for a sender-receiver functionality f enables the receiver to encrypt its input x such that any sender, on input y, can send back a message revealing only f(x, y). Security should hold even when either party can be malicious. A reusable NISC protocol has the additional feature that the receiver’s message can be safely reused for computing multiple outputs \(f(x,y_i)\). Here security should hold even when a malicious sender can learn partial information about the honest receiver’s outputs in each session.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_3](https://doi.org/10.1007/978-3-031-30617-4_3)
## Maliciously-Secure MrNISC in the Plain Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model)
### Authors
* Rex Fernando, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, Jerusalem, 91904, Israel
### Abstract
> We study strong versions of round-optimal MPC. A recent work of Benhamouda and Lin (TCC ’20) identified a version of secure multiparty computation (MPC), termed Multiparty reusable Non-Interactive Secure Computation (MrNISC), that combines at the same time several fundamental aspects of secure computation with standard simulation security into one primitive: round-optimality, succinctness, concurrency, and adaptivity. In more detail, MrNISC is essentially a two-round MPC protocol where the first round of messages serves as a reusable commitment to the private inputs of participating parties. Using these commitments, any subset of parties can later compute any function of their choice on their respective inputs by broadcasting one message each. Anyone who sees these parties’ commitments and evaluation messages (even an outside observer) can learn the function output and nothing else. Importantly, the input commitments can be computed without knowing anything about other participating parties (neither their identities nor their number) and they are reusable across any number of computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_4](https://doi.org/10.1007/978-3-031-30617-4_4)
## Minimizing Setup in Broadcast-Optimal Two Round MPC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc)
### Authors
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Technical University of Denmark, Kongens Lyngby, Denmark
### Abstract
> In this paper we consider two-round secure computation protocols which use different communication channels in different rounds: namely, protocols where broadcast is available in neither round, both rounds, only the first round, or only the second round. The prior works of Cohen, Garay and Zikas (Eurocrypt 2020) and Damgård, Magri, Ravi, Siniscalchi and Yakoubov (Crypto 2021) give tight characterizations of which security guarantees are achievable for various thresholds in each communication structure .

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_5](https://doi.org/10.1007/978-3-031-30617-4_5)
## Sublinear-Communication Secure Multiparty Computation Does Not Require FHE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe)
### Authors
* Elette Boyle, Reichman University, Herzliya, Israel
* Pierre Meyer, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Université Paris Cité, CNRS, IRIF, Paris, France
### Abstract
> Secure computation enables mutually distrusting parties to jointly compute a function on their secret inputs, while revealing nothing beyond the function output. A long-running challenge is understanding the required communication complexity of such protocols—in particular, when communication can be sublinear in the circuit representation size of the desired function. Significant advances have been made affirmatively answering this question within the two-party setting, based on a variety of structures and hardness assumptions. In contrast, in the multi-party setting, only one general approach is known: using Fully Homomorphic Encryption (FHE). This remains the state of affairs even for just three parties, with two corruptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_6](https://doi.org/10.1007/978-3-031-30617-4_6)
## Actively Secure Arithmetic Computation and VOLE with Constant Computational Overhead.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Niv Konstantini, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We study the complexity of two-party secure arithmetic computation where the goal is to evaluate an arithmetic circuit over a finite field \(\mathbb {F}\) in the presence of an active (aka malicious) adversary. In the passive setting, Applebaum et al. (Crypto 2017) constructed a protocol that only makes a constant (amortized) number of field operations per gate. This protocol uses the underlying field \(\mathbb {F}\) as a black box, makes black-box use of (standard) oblivious transfer, and its security is based on arithmetic analogs of well-studied cryptographic assumptions. We present an actively-secure variant of this protocol that achieves, for the first time, all the above features. The protocol relies on the same assumptions and adds only a minor overhead in computation and communication.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_7](https://doi.org/10.1007/978-3-031-30617-4_7)
## SuperPack: Dishonest Majority MPC with Constant Online Communication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication)
### Authors
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Vipul Goyal, NTT Research, Palo Alto, CA, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Tsinghua University, Beijing, China
* Chenkai Weng, Northwestern University, Evanston, IL, USA
### Abstract
> In this work we present a novel actively secure dishonest majority MPC protocol, SuperPack, whose efficiency improves as the number of honest parties increases. Concretely, let \(0<\epsilon <1/2\) and consider an adversary that corrupts \(t<n(1-\epsilon )\) out of n parties. SuperPack requires \(6/\epsilon \) field elements of online communication per multiplication gate across all parties, assuming circuit-dependent preprocessing, and \(10/\epsilon \) assuming circuit-independent preprocessing. In contrast, most of previous works such as SPDZ (Damgård et al., ESORICS 2013) and its derivatives perform the same regardless of whether there is only one honest party, or a constant (non-majority) fraction of honest parties. The only exception is due to Goyal et al. (CRYPTO 2022), which achieves \(58/\epsilon + 96/\epsilon ^2\) field elements assuming circuit-independent preprocessing. Our work improves this result substantially by a factor of at least 25 in the circuit-independent preprocessing model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_8](https://doi.org/10.1007/978-3-031-30617-4_8)
## Detect, Pack and Batch: Perfectly-Secure MPC with Linear Communication and Constant Expected Time.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time)
### Authors
* Ittai Abraham, VMware Research, 5 Sapir St., 4685209, Herzliya, Israel
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Shravani Patil, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
### Abstract
> We prove that perfectly-secure optimally-resilient secure Multi-Party Computation (MPC) for a circuit with C gates and depth D can be obtained in \({\mathcal {O}}((Cn+n^4 + Dn^2)\log n)\) communication complexity and \({\mathcal {O}}(D)\) expected time. For \(D \ll n\) and \(C\ge n^3\), this is the first perfectly-secure optimal-resilient MPC protocol with linear communication complexity per gate and constant expected time complexity per layer.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_9](https://doi.org/10.1007/978-3-031-30617-4_9)
## An Incremental PoSW for General Weight Distributions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions)
### Authors
* Hamza Abusalah, IMDEA Software Institute, Madrid, Spain
* Valerio Cini, Austrian Institute of Technology, Vienna, Austria
### Abstract
> A proof of sequential work (PoSW) scheme allows the prover to convince a verifier that it computed a certain number of computational steps sequentially. Very recently, graph-labeling PoSW schemes, found applications in light-client blockchain protocols, most notably bootstrapping. A bootstrapping protocol allows a light client, with minimal information about the blockchain, to hold a commitment to its stable prefix.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_10](https://doi.org/10.1007/978-3-031-30617-4_10)
## Witness-Succinct Universally-Composable SNARKs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks)
### Authors
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, University of Edinburgh, Edinburgh, Scotland
* Daniel Tschudi, Concordium, Zug, Switzerland
### Abstract
> Zero-knowledge Succinct Non-interactive ARguments of Knowledge (zkSNARKs) are becoming an increasingly fundamental tool in many real-world applications where the proof compactness is of the utmost importance, including blockchains. A proof of security for SNARKs in the Universal Composability (UC) framework (Canetti, FOCS’01) would rule out devastating malleability attacks. To retain security of SNARKs in the UC model, one must show their simulation-extractability such that the knowledge extractor is both black-box and straight-line, which would imply that proofs generated by honest provers are non-malleable. However, existing simulation-extractability results on SNARKs either lack some of these properties, or alternatively have to sacrifice witness succinctness to prove UC security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_11](https://doi.org/10.1007/978-3-031-30617-4_11)
## Speed-Stacking: Fast Sublinear Zero-Knowledge Proofs for Disjunctions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions)
### Authors
* Aarushi Goel, NTT Research, Tokyo, Japan
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
* Nicholas Spooner, University of Warwick, Coventry, UK
### Abstract
> Building on recent compilers for efficient disjunctive composition (e.g. an OR of multiple clauses) of zero-knowledge proofs (e.g. Goel et al. [EUROCRYPT’22]) we propose a new compiler that, when applied to sublinear-sized proofs, can result in sublinear-size disjunctive zero-knowledge with sublinear proving times (without meaningfully increasing proof sizes). Our key observation is that simulation in sublinear-size zero-knowledge proof systems can be much faster (both concretely and asymptotically) than the honest prover. We study applying our compiler to two classes of \(O(\log n)\)-round protocols: interactive oracle proofs, specifically Aurora [EUROCRYPT’19] and Fractal [EUROCRYPT’20], and folding arguments, specifically Compressed \(\varSigma \)-protocols [CR-YPTO’20, CRYPTO’21] and Bulletproofs [S &P’18]. This study validates that the compiler can lead to significant savings. For example, applying our compiler to Fractal enables us to prove a disjunction of \(\ell \) clauses, each of size N, with only \(O((N+\ell ) \cdot \text {polylog}(N))\) computation, versus \(O(\ell N \cdot \text {polylog}(N))\) when proving the disjunction directly. We also find that our compiler offers a new lens through which to understand zero-knowledge proofs, evidenced by multiple examples of protocols with the same “standalone” complexity that each behave very differently when stacked.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_12](https://doi.org/10.1007/978-3-031-30617-4_12)
## Proof-Carrying Data from Arithmetized Random Oracles.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles)
### Authors
* Megan Chen, Boston University, Boston, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Tom Gur, University of Warwick, Coventry, UK
* Jack O’Connor, University of Warwick, Coventry, UK
* Nicholas Spooner, University of Warwick, Coventry, UK
### Abstract
> Proof-carrying data (PCD) is a powerful cryptographic primitive that allows mutually distrustful parties to perform distributed computation in an efficiently verifiable manner. Known constructions of PCD are obtained by recursively-composing SNARKs or related primitives. SNARKs with desirable properties such as transparent setup are constructed in the random oracle model. However, using such SNARKs to construct PCD requires heuristically instantiating the oracle and using it in a non-black-box way. [CCS22] constructed SNARKs in the low-degree random oracle model, circumventing this issue, but instantiating their model in the real world appears difficult.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_13](https://doi.org/10.1007/978-3-031-30617-4_13)
## Supersingular Curves You Can Trust.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust)
### Authors
* Andrea Basso, University of Birmingham, Birmingham, UK
* Andrea Basso, University of Bristol, Bristol, UK
* Giulio Codogni, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Guido Maria Lido, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Deirdre Connolly, Zcash Foundation, Mclean, USA
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
* Travis Morrison, Virginia Tech, Blacksburg, VA, USA
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Sikhar Patranabis, IBM Research India, Bangalore, India
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> Generating a supersingular elliptic curve such that nobody knows its endomorphism ring is a notoriously hard task, despite several isogeny-based protocols relying on such an object. A trusted setup is often proposed as a workaround, but several aspects remain unclear. In this work, we develop the tools necessary to practically run such a distributed trusted-setup ceremony.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_14](https://doi.org/10.1007/978-3-031-30617-4_14)
## On Valiant's Conjecture - Impossibility of Incrementally Verifiable Computation from Random Oracles.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles)
### Authors
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> In his landmark paper at TCC 2008 Paul Valiant introduced the notion of “incrementally verifiable computation” which enables a prover to incrementally compute a succinct proof of correct execution of a (potentially) long running process. The paper later won the 2019 TCC test of time award. The construction was proven secure in the random oracle model without any further computational assumptions. However, the overall proof was given using a non-standard version of the random-oracle methodology where sometimes the hash function is a random oracle and sometimes it has a short description as a circuit. Valiant clearly noted that this model is non-standard, but conjectured that the standard random oracle methodology would not suffice. This conjecture has been open for 14 years. We prove that if the proof system can receive a long witness as input in an incremental manner and is also zero-knowledge then the conjecture is true. Valiant’s original construction does not have these properties but can easily be extended to have them in his model. We relate our result to recent possibility and impossibility results for SNARKs and incrementally verifiable computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_15](https://doi.org/10.1007/978-3-031-30617-4_15)
## SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption)
### Authors
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Alex Lombardi, Simons Institute and UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
### Abstract
> We construct succinct non-interactive arguments (SNARGs) for bounded-depth computations assuming that the decisional Diffie-Hellman (DDH) problem is sub-exponentially hard. This is the first construction of such SNARGs from a Diffie-Hellman assumption. Our SNARG is also unambiguous: for every (true) statement x, it is computationally hard to find any accepting proof for x other than the proof produced by the prescribed prover strategy.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_16](https://doi.org/10.1007/978-3-031-30617-4_16)
## HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates)
### Authors
* Binyi Chen, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Espresso Systems, Menlo Park, USA
* Zhenfei Zhang, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Stanford University, Stanford, USA
* Dan Boneh, Stanford University, Stanford, USA
### Abstract
> Plonk is a widely used succinct non-interactive proof system that uses univariate polynomial commitments. Plonk is quite flexible: it supports circuits with low-degree “custom” gates as well as circuits with lookup gates (a lookup gate ensures that its input is contained in a predefined table). For large circuits, the bottleneck in generating a Plonk proof is the need for computing a large FFT.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_17](https://doi.org/10.1007/978-3-031-30617-4_17)
## Spartan and Bulletproofs are Simulation-Extractable (for Free!).
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free)
### Authors
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Paul Grubbs, University Of Michigan, Ann Arbor, USA
### Abstract
> Increasing deployment of advanced zero-knowledge proof systems, especially zkSNARKs, has raised critical questions about their security against real-world attacks. Two classes of attacks of concern in practice are adaptive soundness attacks, where an attacker can prove false statements by choosing its public input after generating a proof, and malleability attacks, where an attacker can use a valid proof to create another valid proof it could not have created itself. Prior work has shown that simulation-extractability (\(\textsf{SIM}\text {-}\textsf{EXT} \)), a strong notion of security for proof systems, rules out these attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_18](https://doi.org/10.1007/978-3-031-30617-4_18)
## Complete Characterization of Broadcast and Pseudo-signatures from Correlations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations)
### Authors
* Varun Narayanan, Technion, Haifa, Israel
* Vinod M. Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Neha Sangwan, Tata Institute of Fundamental Research, Mumbai, India
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
### Abstract
> Unconditionally secure broadcast is feasible among parties connected by pairwise secure links only if there is a strict two-thirds majority of honest parties when no additional resources are available. This limitation may be circumvented when the parties have recourse to additional resources such as correlated randomness. Fitzi, Wolf, and Wullschleger (CRYPTO 2004) attempted to characterize the conditions on correlated randomness shared among three parties which would enable them to realize broadcast. Due to a gap in their impossibility argument, it turns out that their characterization is incorrect. Using a novel construction we show that broadcast is feasible under a considerably larger class of correlations. In fact, we realize pseudo-signatures, which are information theoretic counterparts of digital signatures using which unconditionally secure broadcast may be obtained. We also obtain a matching impossibility result thereby characterizing the class of correlations on which three-party broadcast (and pseudo-signatures) can be based. Our impossibility proof, which extends the well-know argument of Fischer, Lynch and Merritt (Distr. Comp., 1986) to the case where parties observe correlated randomness, maybe of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_19](https://doi.org/10.1007/978-3-031-30617-4_19)
## Privacy-Preserving Blueprints.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints)
### Authors
* Markulf Kohlweiss, University of Edinburgh and Input Output, Edinburgh, UK
* Anna Lysyanskaya, Brown University, Providence, USA
* An Nguyen, Brown University, Providence, USA
### Abstract
> If everyone were to use anonymous credentials for all access control needs, it would be impossible to trace wrongdoers, by design. This would make legitimate controls, such as tracing illicit trade and terror suspects, impossible to carry out. Here, we propose a privacy-preserving blueprint capability that allows an auditor to publish an encoding \(\textsf{pk}_{\textsf{A}}\) of the function \(f(x,\cdot )\) for a publicly known function f and a secret input x. For example, x may be a secret watchlist, and f(x, y) may return y if \(y\in x\). On input her data y and the auditor’s \(\textsf{pk}_{\textsf{A}}\), a user can compute an escrow \(Z\) such that anyone can verify that \(Z\) was computed correctly from the user’s credential attributes, and moreover, the auditor can recover f(x, y) from \(Z\). Our contributions are:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_20](https://doi.org/10.1007/978-3-031-30617-4_20)
