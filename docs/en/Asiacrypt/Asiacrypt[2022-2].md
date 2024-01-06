# Asiacrypt[2022-2]
## A New Isogeny Representation and Applications to Cryptography.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#a-new-isogeny-representation-and-applications-to-cryptography)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#a-new-isogeny-representation-and-applications-to-cryptography)
### Authors
* Antonin Leroux, DGA, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Antonin Leroux, INRIA, Le Chesnay, France
### Abstract
> This paper focuses on isogeny representations, defined as ways to evaluate isogenies and verify membership to the language of isogenous supersingular curves (the set of triples \(D,E_1,E_2\) with a cyclic isogeny of degree D between \(E_1\) and \(E_2\)). The tasks of evaluating and verifying isogenies are fundamental for isogeny-based cryptography.
> 
> Our main contribution is the design of the suborder representation, a new isogeny representation targetted at the case of (big) prime degree. The core of our new method is the revelation of endomorphisms of smooth norm inside a well-chosen suborder of the codomain’s endomorphism ring. This new representation appears to be opening interesting prospects for isogeny-based cryptography under the hardness of a new computational problem: the SubOrder to Ideal Problem (SOIP). As an application, we introduce pSIDH, a new NIKE based on the suborder representation. Studying new assumption appears to be particularly crucial in the light of the recent attacks against isogeny-based cryptography.
> 
> In order to manipulate efficiently the suborder representation, we develop several heuristic algorithmic tools to solve norm equations inside a new family of quaternion orders. These new algorithms may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_1](https://doi.org/10.1007/978-3-031-22966-4_1)
## Group Action Key Encapsulation and Non-Interactive Key Exchange in the QROM.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#group-action-key-encapsulation-and-non-interactive-key-exchange-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#group-action-key-encapsulation-and-non-interactive-key-exchange-in-the-qrom)
### Authors
* Julien Duman, Ruhr-Universität Bochum, Bochum, Germany
* Dominik Hartmann, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Sabrina Kunzweiler, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Lehmann, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> In the context of quantum-resistant cryptography, cryptographic group actions offer an abstraction of isogeny-based cryptography in the Commutative Supersingular Isogeny Diffie-Hellman (CSIDH) setting. In this work, we revisit the security of two previously proposed natural protocols: the Group Action Hashed ElGamal key encapsulation mechanism (GA-HEG KEM) and the Group Action Hashed Diffie-Hellman non-interactive key-exchange (GA-HDH NIKE) protocol. The latter protocol has already been considered to be used in practical protocols such as Post-Quantum WireGuard (S &P ’21) and OPTLS (CCS ’20).
> 
> We prove that active security of the two protocols in the Quantum Random Oracle Model (QROM) inherently relies on very strong variants of the Group Action Strong CDH problem, where the adversary is given arbitrary quantum access to a DDH oracle. That is, quantum accessible Strong CDH assumptions are not only sufficient but also necessary to prove active security of the GA-HEG KEM and the GA-HDH NIKE protocols.
> 
> Furthermore, we propose variants of the protocols with QROM security from the classical Strong CDH assumption, i.e., CDH with classical access to the DDH oracle. Our first variant uses key confirmation and can therefore only be applied in the KEM setting. Our second but considerably less efficient variant is based on the twinning technique by Cash et al. (EUROCRYPT ’08) and in particular yields the first actively secure isogeny-based NIKE with QROM security from the standard CDH assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_2](https://doi.org/10.1007/978-3-031-22966-4_2)
## Horizontal Racewalking Using Radical Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#horizontal-racewalking-using-radical-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#horizontal-racewalking-using-radical-isogenies)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Thomas Decru, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, Departement Wiskunde, KU Leuven, Leuven, Belgium
* Marc Houben, Mathematisch Instituut, Universiteit Leiden, Leiden, The Netherlands
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
### Abstract
> We address three main open problems concerning the use of radical isogenies, as presented by Castryck, Decru and Vercauteren at Asiacrypt 2020, in the computation of long chains of isogenies of fixed, small degree between elliptic curves over finite fields. Firstly, we present an interpolation method for finding radical isogeny formulae in a given degree N, which by-passes the need for factoring division polynomials over large function fields. Using this method, we are able to push the range for which we have formulae at our disposal from \(N \le 13\) to \(N \le 37\) (where in the range \(18 \le N \le 37\) we have restricted our attention to prime powers). Secondly, using a combination of known techniques and ad-hoc manipulations, we derive optimized versions of these formulae for \(N \le 19\), with some instances performing more than twice as fast as their counterparts from 2020. Thirdly, we solve the problem of understanding the correct choice of radical when walking along the surface between supersingular elliptic curves over \(\mathbb {F}_p\) with \(p \equiv 7 \bmod 8\); this is non-trivial for even N and was settled for \(N = 2\) and \(N = 4\) only, in the latter case by Onuki and Moriya at PKC 2022. We give a conjectural statement for all even N and prove it for \(N \le 14\). The speed-ups obtained from these techniques are substantial: using 16-isogenies, the computation of long chains of 2-isogenies over 512-bit prime fields can be accelerated by a factor 3, and the previous implementation of CSIDH using radical isogenies can be sped up by about \(12\%\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_3](https://doi.org/10.1007/978-3-031-22966-4_3)
## Threshold Linearly Homomorphic Encryption on bfZ/2kbfZ.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#threshold-linearly-homomorphic-encryption-on-bfz-2kbfz)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#threshold-linearly-homomorphic-encryption-on-bfz-2kbfz)
### Authors
* Guilhem Castagnos, Université de Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Fabien Laguillaumie, LIRMM, Université de Montpellier, CNRS, Montpellier, France
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, Zondax AG, Zug, Switzerland
### Abstract
> A threshold public key encryption protocol is a public key system where the private key is distributed among n different servers. It offers high security since no single server is entrusted to perform the decryption in its entirety. It is the core component of many multiparty computation protocols which involves mutually distrusting parties with common goals. It is even more useful when it is homomorphic, which means that public operations on ciphertexts translate to operations on the underlying plaintexts. In particular, Cramer, Damgård and Nielsen at Eurocrypt 2001 provided a new approach to multiparty computation from linearly homomorphic threshold encryption schemes. On the other hand, there has been recent interest in developing multiparty computations modulo \(2^k\) for a certain integer k, that closely match data manipulated by a CPU. Multiparty computation would therefore benefit from an encryption scheme with such a message space that would support a distributed decryption.
> 
> In this work, we provide the first threshold linearly homomorphic encryption whose message space is \(\textbf{Z}/2^k\textbf{Z}\) for any k. It is inspired by Castagnos and Laguillaumie’s encryption scheme from RSA 2015, but works with a class group of discriminant whose factorisation is unknown.
> 
> Its natural structure à la Elgamal makes it possible to distribute the decryption among servers using linear integer secret sharing, allowing any access structure for the decryption policy. Furthermore its efficiency and its flexibility on the choice of the message space make it a good candidate for applications to multiparty computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_4](https://doi.org/10.1007/978-3-031-22966-4_4)
## Large-Precision Homomorphic Sign Evaluation Using FHEW/TFHE Bootstrapping.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#large-precision-homomorphic-sign-evaluation-using-fhew-tfhe-bootstrapping)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#large-precision-homomorphic-sign-evaluation-using-fhew-tfhe-bootstrapping)
### Authors
* Zeyu Liu, Duality Technologies, Hoboken, NJ, USA
* Daniele Micciancio, Duality Technologies, Hoboken, NJ, USA
* Yuriy Polyakov, Duality Technologies, Hoboken, NJ, USA
### Abstract
> A comparison of two encrypted numbers is an important operation needed in many machine learning applications, for example, decision tree or neural network inference/training. An efficient instantiation of this operation in the context of fully homomorphic encryption (FHE) can be challenging, especially when a relatively high precision is sought. The conventional FHE way of evaluating the comparison operation, which is based on the sign function evaluation using FHEW/TFHE bootstrapping (often referred in literature as programmable bootstrapping), can only support very small precision (practically limited to 4–5 bits or so). For higher precision, the runtime complexity scales linearly with the ciphertext (plaintext) modulus (i.e., exponentially with the modulus bit size). We propose sign function evaluation algorithms that scale logarithmically with the ciphertext (plaintext) modulus, enabling the support of large-precision comparison in practice. Our sign evaluation algorithms are based on an iterative use of homomorphic floor function algorithms, which are also derived in our work. Further, we generalize our procedures for floor function evaluation to arbitrary function evaluation, which can be used to support both small plaintext moduli (directly) and larger plaintext moduli (by using a homomorphic digit decomposition algorithm, also suggested in our work). We implement all these algorithms using the PALISADE lattice cryptography library, introducing several implementation-specific optimizations along the way, and discuss our experimental results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_5](https://doi.org/10.1007/978-3-031-22966-4_5)
## EvalRound Algorithm in CKKS Bootstrapping.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#evalround-algorithm-in-ckks-bootstrapping)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#evalround-algorithm-in-ckks-bootstrapping)
### Authors
* Seonghak Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Jaehyung Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Taekyung Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Minji Park, Ewha Womans University, 52 Ewhayeodae-gil, Seodaemun-gu, Seoul, 03760, Korea
* Chohong Min, Ewha Womans University, 52 Ewhayeodae-gil, Seodaemun-gu, Seoul, 03760, Korea
### Abstract
> Homomorphic encryption (HE) has opened an entirely new world up in the privacy-preserving use of sensitive data by conducting computations on encrypted data. Amongst many HE schemes targeting computation in various contexts, Cheon–Kim–Kim–Song (CKKS) scheme [8] is distinguished since it allows computations for encrypted real number data, which have greater impact in real-world applications.
> 
> CKKS scheme is a levelled homomorphic encryption scheme, consuming one level for each homomorphic multiplication. When the level runs out, a special computational circuit called bootstrapping is required in order to conduct further multiplications. The algorithm proposed by Cheon et al. [7] has been regarded as a standard way to do bootstrapping in the CKKS scheme, and it consists of the following four steps: ModRaise, CoeffToSlot, EvalMod and SlotToCoeff. However, the steps consume a number of levels themselves, and thus optimizing this extra consumption has been a major focus of the series of recent research.
> 
> Among the total levels consumed in the bootstrapping steps, about a half of them is spent in CoeffToSlot and SlotToCoeff steps to scale up the real number components of \(\textsf{DFT}\)matrices and round them to the nearest integers. Each scale-up factor is very large so that it takes up one level to rescale it down. Scale-up factors can be taken smaller to save levels, but the error of rounding would be transmitted to EvalMod and eventually corrupt the accuracy of bootstrapping.
> 
> EvalMod aims to get rid of the superfluous qI term from a plaintext \(\textsf{pt}+ qI\) resulting from ModRaise, where q is the bottom modulus and I is a polynomial with small integer coefficients. EvalRound is referred to as its opposite, obtaining qI. We introduce a novel bootstrapping algorithm consisting of ModRaise, CoeffToSlot, EvalRound and SlotToCoeff, which yields taking smaller scale-up factors without the damage of rounding errors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_6](https://doi.org/10.1007/978-3-031-22966-4_6)
## FINAL: Faster FHE Instantiated with NTRU and LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#final-faster-fhe-instantiated-with-ntru-and-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#final-faster-fhe-instantiated-with-ntru-and-lwe)
### Authors
* Charlotte Bonte, Intel Corporation, Emerging Security Lab, Mountain View, USA
* Ilia Iliashenko, imec-COSIC, KU Leuven, Leuven, Belgium
* Jeongeun Park, imec-COSIC, KU Leuven, Leuven, Belgium
* Hilder V. L. Pereira, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, Zama Inc., Franklin, USA
### Abstract
> The NTRU problem is a promising candidate to build efficient Fully Homomorphic Encryption (FHE). However, all the existing proposals (e.g. LTV, YASHE) need so-called ‘overstretched’ parameters of NTRU to enable homomorphic operations. It was shown by Albrecht et al. (CRYPTO 2016) that these parameters are vulnerable against subfield lattice attacks.
> 
> Based on a recent, more detailed analysis of the overstretched NTRU assumption by Ducas and van Woerden (ASIACRYPT 2021), we construct two FHE schemes whose NTRU parameters lie outside the overstretched range. The first scheme is based solely on NTRU and demonstrates competitive performance against the state-of-the-art FHE schemes including TFHE. Our second scheme, which is based on both the NTRU and LWE assumptions, outperforms TFHE with a 28% faster bootstrapping and 45% smaller bootstrapping and key-switching keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_7](https://doi.org/10.1007/978-3-031-22966-4_7)
## Flashproofs: Efficient Zero-Knowledge Arguments of Range and Polynomial Evaluation with Transparent Setup.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#flashproofs-efficient-zero-knowledge-arguments-of-range-and-polynomial-evaluation-with-transparent-setup)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#flashproofs-efficient-zero-knowledge-arguments-of-range-and-polynomial-evaluation-with-transparent-setup)
### Authors
* Nan Wang, Australian National University, Canberra, Australia
* Sid Chi-Kin Chau, Australian National University, Canberra, Australia
### Abstract
> We propose Flashproofs, a new type of efficient special honest verifier zero-knowledge arguments with a transparent setup in the discrete logarithm (DL) setting. First, we put forth gas-efficient range arguments that achieve \(O(N^{\frac{2}{3}})\) communication cost, and involve \(O(N^{\frac{2}{3}})\) group exponentiations for verification and a slightly sub-linear number of group exponentiations for proving with respect to the range \([0, 2^N-1]\), where N is the bit length of the range. For typical confidential transactions on blockchain platforms supporting smart contracts, verifying our range arguments consumes only 237K and 318K gas for 32-bit and 64-bit ranges, which are comparable to 220K gas incurred by verifying the most efficient zkSNARK with a trusted setup (EUROCRYPT ’ 16) at present. Besides, the aggregation of multiple arguments can yield further efficiency improvement. Second, we present polynomial evaluation arguments based on the techniques of Bayer & Groth (EUROCRYPT ’ 13). We provide two zero-knowledge arguments, which are optimised for lower-degree (\(D \in [3, 2^9]\)) and higher-degree (\(D > 2^9\)) polynomials, where D is the polynomial degree. Our arguments yield a non-trivial improvement in the overall efficiency. Notably, the number of group exponentiations for proving drops from \(8\log D\) to \(3(\log D+\sqrt{\log D})\). The communication cost and the number of group exponentiations for verification decrease from \(7\log D\) to \((\log D + 3\sqrt{\log D})\). To the best of our knowledge, our arguments instantiate the most communication-efficient arguments of membership and non-membership in the DL setting among those not requiring trusted setups. More importantly, our techniques enable a significantly asymptotic improvement in the efficiency of communication and verification (group exponentiations) from \(O(\log D)\) to \(O(\sqrt{\log D})\) when multiple arguments satisfying different polynomials with the same degree and inputs are aggregated.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_8](https://doi.org/10.1007/978-3-031-22966-4_8)
## Counting Vampires: From Univariate Sumcheck to Updatable ZK-SNARK.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#counting-vampires-from-univariate-sumcheck-to-updatable-zk-snark)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#counting-vampires-from-univariate-sumcheck-to-updatable-zk-snark)
### Authors
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Janno Siim, Simula UiB, Bergen, Norway
* Michał Zając, Nethermind, London, UK
### Abstract
> We propose a univariate sumcheck argument \(\mathfrak {Count}\) of essentially optimal communication efficiency of one group element. While the previously most efficient univariate sumcheck argument of Aurora is based on polynomial commitments, \(\mathfrak {Count}\) is based on inner-product commitments. We use \(\mathfrak {Count}\) to construct a new pairing-based updatable and universal zk-SNARK \(\mathfrak {Vampire}\) with the shortest known argument length (four group and two finite field elements) for \(\textsf{NP}\). In addition, \(\mathfrak {Vampire}\) uses the aggregated polynomial commitment scheme of Boneh et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_9](https://doi.org/10.1007/978-3-031-22966-4_9)
## Improved Straight-Line Extraction in the Random Oracle Model with Applications to Signature Aggregation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#improved-straight-line-extraction-in-the-random-oracle-model-with-applications-to-signature-aggregation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#improved-straight-line-extraction-in-the-random-oracle-model-with-applications-to-signature-aggregation)
### Authors
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Abhi Shelat, Northeastern University, Boston, USA
### Abstract
> The goal of this paper is to improve the efficiency and applicability of straightline extraction techniques in the random oracle model. Straightline extraction in the random oracle model refers to the existence of an extractor, which given the random oracle queries made by a prover \(P^*(x)\) on some theorem x, is able to produce a witness w for x with roughly the same probability that \(P^*\) produces a verifying proof. This notion applies to both zero-knowledge protocols and verifiable computation where the goal is compressing a proof.
> 
> Pass (CRYPTO ’03) first showed how to achieve this property for NP using a cut-and-choose technique which incurred a \(\lambda ^2\)-bit overhead in communication where \(\lambda \) is a security parameter. Fischlin (CRYPTO ’05) presented a more efficient technique based on “proofs of work” that sheds this \(\lambda ^2\) cost, but only applies to a limited class of Sigma Protocols with a “quasi-unique response” property, which for example, does not necessarily include the standard OR composition for Sigma protocols.
> 
> With Schnorr/EdDSA signature aggregation as a motivating application, we develop new techniques to improve the computation cost of straight-line extractable proofs. Our improvements to the state of the art range from 70\(\times \)–200\(\times \) for the best compression parameters. This is due to a uniquely suited polynomial evaluation algorithm, and the insight that a proof-of-work that relies on multicollisions and the birthday paradox is faster to solve than inverting a fixed target.
> 
> Our collision based proof-of-work more generally improves the Prover’s random oracle query complexity when applied in the NIZK setting as well. In addition to reducing the query complexity of Fischlin’s Prover, for a special class of Sigma protocols we can for the first time closely match a new lower bound we present.
> 
> Finally we extend Fischlin’s technique so that it applies to a more general class of strongly-sound Sigma protocols, which includes the OR composition. We achieve this by carefully randomizing Fischlin’s technique—we show that its current deterministic nature prevents its application to certain multi-witness languages.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_10](https://doi.org/10.1007/978-3-031-22966-4_10)
## SIDH Proof of Knowledge.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#sidh-proof-of-knowledge)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#sidh-proof-of-knowledge)
### Authors
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Samuel Dobson, Mathematics Department, University of Auckland, Auckland, New Zealand
* Steven D. Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
* Lukas Zobernig, Mathematics Department, University of Auckland, Auckland, New Zealand
### Abstract
> We show that the soundness proof for the De Feo–Jao–Plût identification scheme (the basis for supersingular isogeny Diffie–Hellman (SIDH) signatures) contains an invalid assumption, and we provide a counterexample for this assumption—thus showing the proof of soundness is invalid. As this proof was repeated in a number of works by various authors, multiple pieces of literature are affected by this result. Due to the importance of being able to prove knowledge of an SIDH key (for example, to prevent adaptive attacks), soundness is a vital property.
> 
> Surprisingly, the problem of proving knowledge of a specific isogeny turns out to be considerably more difficult than was perhaps anticipated. The main results of this paper are a sigma protocol to prove knowledge of a walk of specified length in a supersingular isogeny graph, and a second one to additionally prove that the isogeny maps some torsion points to some other torsion points (as seen in SIDH public keys). Our scheme also avoids the SIDH identification scheme soundness issue raised by Ghantous, Pintore and Veroni. In particular, our protocol provides a non-interactive way of verifying correctness of SIDH public keys, and related statements, as protection against adaptive attacks.
> 
> Post-scriptum: Some months after this work was completed and made public, the SIDH assumption was broken in a series of papers by several authors. Hence, in the standard SIDH setting, some of the statements studied here now have trivial polynomial time non-interactive proofs. Nevertheless our first sigma protocol is unaffected by the attacks, and our second protocol may still be useful in present and future variants of SIDH that escape the attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_11](https://doi.org/10.1007/978-3-031-22966-4_11)
## DAG-Σ: A DAG-Based Sigma Protocol for Relations in CNF.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#dag-a-dag-based-sigma-protocol-for-relations-in-cnf)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#dag-a-dag-based-sigma-protocol-for-relations-in-cnf)
### Authors
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Yu Wang, Peng Cheng Laboratory, Shenzhen, China
* Zhiming Zheng, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Zhiming Zheng, Institute of Artificial Intelligence, LMIB, NLSDE, Beijing Advanced Innovation Center for Future Blockchain and Privacy Computing, Beihang University, Beijing, China
### Abstract
> At CRYPTO 1994, Cramer, Damgård and Schoenmakers proposed a general method to construct proofs of knowledge (PoKs), especially for k-out-of-n partial knowledge, of which relations can be expressed in disjunctive normal form (DNF). Since then, proofs of k-out-of-n partial knowledge have attracted much attention and some efficient constructions have been proposed. However, many practical scenarios require efficient PoK protocols for partial knowledge in other forms.
> 
> In this paper, we mainly focus on PoK protocols for k-conjunctive normal form (k-CNF) relations, which have n statements and can be expressed as follows: (i) k statements constitute a clause via “OR” operations, and (ii) the relation consists of multiple clauses via “AND” operations. We propose an alternative Sigma protocol (called DAG-\({\Sigma }\) protocol) for k-CNF relations (in the discrete logarithm setting), by converting these relations to directed acyclic graphs (DAGs). Our DAG-\({\Sigma }\) protocol achieves less communication cost and smaller computational overhead compared with Cramer et al.’s general method.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_12](https://doi.org/10.1007/978-3-031-22966-4_12)
## Zero-Knowledge Protocols for the Subset Sum Problem from MPC-in-the-Head with Rejection.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#zero-knowledge-protocols-for-the-subset-sum-problem-from-mpc-in-the-head-with-rejection)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#zero-knowledge-protocols-for-the-subset-sum-problem-from-mpc-in-the-head-with-rejection)
### Authors
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
* Jules Maire, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### Abstract
> We propose (honest verifier) zero-knowledge arguments for the modular subset sum problem. Previous combinatorial approaches, notably one due to Shamir, yield arguments with cubic communication complexity (in the security parameter). More recent methods, based on the MPC-in-the-head technique, also produce arguments with cubic communication complexity.
> 
> We improve this approach by using a secret-sharing over small integers (rather than modulo q) to reduce the size of the arguments and remove the prime modulus restriction. Since this sharing may reveal information on the secret subset, we introduce the idea of rejection to the MPC-in-the-head paradigm. Special care has to be taken to balance completeness and soundness and preserve zero-knowledge of our arguments. We combine this idea with two techniques to prove that the secret vector (which selects the subset) is well made of binary coordinates.
> 
> Our new protocols achieve an asymptotic improvement by producing arguments of quadratic size. This improvement is also practical: for a 256-bit modulus q, the best variant of our protocols yields 13 KB arguments while previous proposals gave 1180 KB arguments, for the best general protocol, and 122 KB, for the best protocol restricted to prime modulus. Our techniques can also be applied to vectorial variants of the subset sum problem and in particular the inhomogeneous short integer solution (ISIS) problem for which they provide an efficient alternative to state-of-the-art protocols when the underlying ring is not small and NTT-friendly. We also show the application of our protocol to build efficient zero-knowledge arguments of plaintext and/or key knowledge in the context of fully-homomorphic encryption. When applied to the TFHE scheme, the obtained arguments are more than 20 times smaller than those obtained with previous protocols. Eventually, we use our technique to construct an efficient digital signature scheme based on a pseudo-random function due to Boneh, Halevi, and Howgrave-Graham.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_13](https://doi.org/10.1007/978-3-031-22966-4_13)
## Efficient Zero-Knowledge Arguments in Discrete Logarithm Setting: Sublogarithmic Proof or Sublinear Verifier.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#efficient-zero-knowledge-arguments-in-discrete-logarithm-setting-sublogarithmic-proof-or-sublinear-verifier)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#efficient-zero-knowledge-arguments-in-discrete-logarithm-setting-sublogarithmic-proof-or-sublinear-verifier)
### Authors
* Sungwook Kim, Department of Information Security, Seoul Women’s University, Seoul, 01797, Republic of Korea
* Hyeonbum Lee, Department of Mathematics and Research Institute for Natural Sciences, Hanyang University, Seoul, 04763, Republic of Korea
* Jae Hong Seo, Department of Mathematics and Research Institute for Natural Sciences, Hanyang University, Seoul, 04763, Republic of Korea
### Abstract
> We propose three interactive zero-knowledge arguments for arithmetic circuit of size N in the common random string model, which can be converted to be non-interactive by Fiat-Shamir heuristics in the random oracle model. First argument features \(O(\sqrt{\log N})\) communication and round complexities and O(N) computational complexity for the verifier. Second argument features \(O(\log N)\) communication and \(O(\sqrt{N})\) computational complexity for the verifier. Third argument features \(O(\log N)\) communication and \(O(\sqrt{N}\log N)\) computational complexity for the verifier. Contrary to first and second arguments, the third argument is free of reliance on pairing-friendly elliptic curves. The soundness of three arguments is proven under the standard discrete logarithm and/or the double pairing assumption, which is at least as reliable as the decisional Diffie-Hellman assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_14](https://doi.org/10.1007/978-3-031-22966-4_14)
## Unconditionally Secure NIZK in the Fine-Grained Setting.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#unconditionally-secure-nizk-in-the-fine-grained-setting)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#unconditionally-secure-nizk-in-the-fine-grained-setting)
### Authors
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> Non-interactive zero-knowledge (NIZK) proof systems are often constructed based on cryptographic assumptions. In this paper, we propose the first unconditionally secure NIZK system in the \(\mathsf {AC^0}\)-fine-grained setting. More precisely, our NIZK system has perfect soundness for all adversaries and unconditional zero-knowledge for \(\mathsf {AC^0}\) adversaries, namely, an \(\mathsf {AC^0}\) adversary can only break the zero-knowledge property with negligible probability unconditionally. At the core of our construction is an OR-proof system for satisfiability of 1 out of polynomial many statements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_15](https://doi.org/10.1007/978-3-031-22966-4_15)
## Triply Adaptive UC NIZK.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#triply-adaptive-uc-nizk)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#triply-adaptive-uc-nizk)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Pratik Sarkar, Boston University, Boston, USA
* Xiao Wang, Northwestern University, Evanston, USA
### Abstract
> Non-interactive zero knowledge (NIZK) enables proving the validity of NP statement without leaking anything else. We study multi-instance NIZKs in the common reference string (CRS) model, against an adversary that adaptively corrupts parties and chooses statements to be proven. We construct the first such triply adaptive NIZK that provides full adaptive soundness, as well as adaptive zero-knowledge, assuming either LWE or else LPN and DDH (previous constructions rely on non-falsifiable knowledge assumptions). In addition, our NIZKs are universally composable (UC). Along the way, we:
> 
> Formulate an ideal functionality, \(\mathcal {F}_{\textsf {NICOM}}\), which essentially captures non-interactive commitments, and show that it is realizable by existing protocols using standard assumptions.
> 
> Define and realize, under standard assumptions, Sigma protocols which satisfy triply adaptive security with access to \(\mathcal {F}_{\textsf {NICOM}}\).
> 
> Use the Fiat-Shamir transform, instantiated with correlation intractable hash functions, to compile a Sigma protocol with triply adaptive security with access to \(\mathcal {F}_{\textsf {NICOM}}\) into a triply adaptive UC-NIZK argument in the CRS model with access to \(\mathcal {F}_{\textsf {NICOM}}\), assuming LWE (or else LPN and DDH).
> 
> Use the UC theorem to obtain UC-NIZK in the CRS model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_16](https://doi.org/10.1007/978-3-031-22966-4_16)
## Efficient NIZKs from LWE via Polynomial Reconstruction and "MPC in the Head".
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#efficient-nizks-from-lwe-via-polynomial-reconstruction-and-mpc-in-the-head)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#efficient-nizks-from-lwe-via-polynomial-reconstruction-and-mpc-in-the-head)
### Authors
* Riddhi Ghosal, University of California, Los Angeles, CA, USA
* Paul Lou, University of California, Los Angeles, CA, USA
* Amit Sahai, University of California, Los Angeles, CA, USA
### Abstract
> All existing works building non-interactive zero-knowledge (NIZK) arguments for \(\textsf{NP}\) from the Learning With Errors (LWE) assumption have studied instantiating the Fiat-Shamir paradigm on a parallel repetition of an underlying honest-verifier zero knowledge (HVZK) \(\varSigma \) protocol, via an appropriately built correlation-intractable (CI) hash function from LWE. This technique has inherent efficiency losses that arise from parallel repetition.
> 
> In this work, we show how to make use of the more efficient “MPC in the Head” technique for building an underlying honest-verifier protocol upon which to apply the Fiat-Shamir paradigm. To make this possible, we provide a new and more efficient construction of CI hash functions from LWE, using efficient algorithms for polynomial reconstruction as the main technical tool.
> 
> We stress that our work provides a new and more efficient “base construction” for building LWE-based NIZK arguments for \(\textsf{NP}\). Our protocol can be the building block around which other efficiency-focused bootstrapping techniques can be applied, such as the bootstrapping technique of Gentry et al. (Journal of Cryptology 2015).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_17](https://doi.org/10.1007/978-3-031-22966-4_17)
## Key-Reduced Variants of 3kf9 with Beyond-Birthday-Bound Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#key-reduced-variants-of-3kf9-with-beyond-birthday-bound-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#key-reduced-variants-of-3kf9-with-beyond-birthday-bound-security)
### Authors
* Yaobin Shen, Shanghai Jiao Tong University, Shanghai, China
* Yaobin Shen, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* Ferdinand Sibleyras, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> 3kf9 is a three-key CBC-type MAC that enhances the standardized integrity algorithm f9 (3GPP-MAC). It has beyond-birthday-bound security and is expected to be a possible candidate in constrained environments when instantiated with lightweight blockciphers. Two variants 2kf9 and 1kf9 were proposed to reduce key size for efficiency, but recently, Leurent et al. (CRYPTO’18) and Shen et al. (CRYPTO’21) pointed out critical flaws on these two variants and invalidated their security proofs with birthday-bound attacks.
> 
> In this work, we revisit previous constructions of key-reduced variants of 3kf9 and analyze what went wrong in security analyses. Interestingly, we find that a single doubling near the end restores the intended beyond-birthday-bound security of both 2kf9 and 1kf9. We then propose two new key-reduced variants of 3kf9, called n2kf9 and n1kf9. By leveraging previous attempts, we prove that n2kf9 is secure up to \(2^{2n/3}\) queries, and prove that n1kf9 is secure up to \(2^{2n/3}\) queries when the message space is prefix-free. We also provide beyond-birthday analysis of n2kf9 in the multi-user setting. Note that compared to EMAC and CBC-MAC, the additional cost to provide a higher security guarantee is expected to be minimal for n2kf9 and n1kf9. It only requires one additional blockcipher call and one doubling.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_18](https://doi.org/10.1007/978-3-031-22966-4_18)
## Jammin' on the Deck.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#jammin-on-the-deck)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#jammin-on-the-deck)
### Authors
* Norica Băcuieți, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Gilles Van Assche, STMicroelectronics, Diegem, Belgium
* Ronny Van Keer, STMicroelectronics, Diegem, Belgium
* Seth Hoffert, Lincoln, Nebraska, USA
### Abstract
> Currently, a vast majority of symmetric-key cryptographic schemes are built as block cipher modes. The block cipher is designed to be hard to distinguish from a random permutation and this is supported by cryptanalysis, while (good) modes can be proven secure if a random permutation takes the place of the block cipher. As such, block ciphers form an abstraction level that marks the border between cryptanalysis and security proofs. In this paper, we investigate a re-factored version of symmetric-key cryptography built not around the block ciphers but rather the deck function: a keyed function with arbitrary input and output length and incrementality properties. This allows for modes of use that are simpler to analyze and still very efficient thanks to the excellent performance of currently proposed deck functions. We focus on authenticated encryption (AE) modes with varying levels of robustness. Our modes have built-in support for sessions, but are also efficient without them. As a by-product, we define a new ideal model for AE dubbed the jammin cipher. Unlike the OAE2 security models, the jammin cipher is both a operational ideal scheme and a security reference, and addresses real-world use cases such as bi-directional communication and multi-key security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_19](https://doi.org/10.1007/978-3-031-22966-4_19)
## A Modular Approach to the Incompressibility of Block-Cipher-Based AEADs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#a-modular-approach-to-the-incompressibility-of-block-cipher-based-aeads)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#a-modular-approach-to-the-incompressibility-of-block-cipher-based-aeads)
### Authors
* Akinori Hosoyamada, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
* Kan Yasuda, NTT Social Informatics Laboratories, Tokyo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
### Abstract
> Incompressibility is one of the most fundamental security goals in white-box cryptography. Given recent advances in the design of efficient and incompressible block ciphers such as SPACE, SPNbox and WhiteBlock, we demonstrate the feasibility of reducing incompressible AEAD modes to incompressible block ciphers. We first observe that several existing AEAD modes of operation, including CCM, GCM(-SIV), and OCB, would be all insecure against white-box adversaries even when used with an incompressble block cipher. This motivates us to revisit and formalize incompressibility-based security definitions for AEAD schemes and for block ciphers, so that we become able to design modes and reduce their security to that of the underlying ciphers. Our new security notion for AEAD, which we name whPRI, is an extension of the pseudo-random injection security in the black-box setting. Similar security notions are also defined for other cryptosystems such as privacy-only encryption schemes. We emphasize that whPRI ensures quite strong authenticity against white-box adversaries: existential unforgeability beyond leakage. This contrasts sharply with previous notions which have ensured either no authenticity or only universal unforgeability. For the underlying ciphers we introduce a new notion of whPRP, which extends that of PRP in the black-box setting. Interestingly, our incompressibility reductions follow from a variant of public indifferentiability. In particular, we show that a practical whPRI-secure AEAD mode can be built from a whPRP-secure block cipher: We present a SIV-like composition of the sponge construction (utilizing a block cipher as its underlying primitive) with the counter mode and prove that such a construction is (in the variant sense) public indifferentiable from a random injection. To instantiate such an AEAD scheme, we propose a 256-bit variant of SPACE, based on our conjecture that SPACE should be a whPRP-secure cipher.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_20](https://doi.org/10.1007/978-3-031-22966-4_20)
## Security of Truncated Permutation Without Initial Value.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#security-of-truncated-permutation-without-initial-value)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#security-of-truncated-permutation-without-initial-value)
### Authors
* Lorenzo Grassi, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### Abstract
> Indifferentiability is a powerful notion in cryptography. If a construction is proven to be indifferentiable from an ideal object, it can under certain assumptions instantiate that ideal object in higher-level constructions. Indifferentiability is a particularly useful model for cryptographic hash functions, and myriad results are known proving that a hash function behaves like a random oracle under the assumption that the underlying primitive (typically a compression function, a block cipher, or a permutation) is random. Recently, advances have been made in proving indifferentiability of one-way functions with fixed input length. One such example is truncation of a permutation. If one evaluates a random permutation on an input value concatenated with a fixed initial value, and truncates the output, one obtains a construction that is indifferentiable from a random function up to a certain bound (Dodis et al., FSE 2009; Choi et al., ASIACRYPT 2019). Security of this construction, however, is in part determined by the length of the initial value; omission of this fixed value yields an insecure construction.
> 
> In this paper, we reconsider truncation of a permutation, and prove that the construction is indifferentiable from a random oracle, even if this fixed initial value is replaced by a randomized value. This randomized value may be the same for different evaluations of the construction, or freshly generated, up to the discretion of the adversary. The security level is the same as that of truncation with fixed initial value, up to collisions in the randomized value.
> 
> We show that our construction has immediate implications in the context of parallel variable-length digest generation. In detail, we describe Cascade-MGF, that operates on top of any cryptographic hash function and uses the hash function output as randomized initial value in truncation. We demonstrate that Cascade-MGF compares favorably over earlier parallel variable-length digest generation constructions, namely Counter-MGF and Chained-MGF, in almost all settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_21](https://doi.org/10.1007/978-3-031-22966-4_21)
## Puncturable Key Wrapping and Its Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#puncturable-key-wrapping-and-its-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#puncturable-key-wrapping-and-its-applications)
### Authors
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Felix Günther, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### Abstract
> We introduce puncturable key wrapping (PKW), a new cryptographic primitive that supports fine-grained forward security properties in symmetric key hierarchies. We develop syntax and security definitions, along with provably secure constructions for PKW from simpler components (AEAD schemes and puncturable PRFs). We show how PKW can be applied in two distinct scenarios. First, we show how to use PKW to achieve forward security for TLS 1.3 0-RTT session resumption, even when the server’s long-term key for generating session tickets gets compromised. This extends and corrects a recent work of Aviram, Gellert, and Jager (Journal of Cryptology, 2021). Second, we show how to use PKW to build a protected file storage system with file shredding, wherein a client can outsource encrypted files to a potentially malicious or corrupted cloud server whilst achieving strong forward-security guarantees, relying only on local key updates.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_22](https://doi.org/10.1007/978-3-031-22966-4_22)
## Multi-user Security of the Sum of Truncated Random Permutations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#multi-user-security-of-the-sum-of-truncated-random-permutations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#multi-user-security-of-the-sum-of-truncated-random-permutations)
### Authors
* Wonseok Choi, KIAS, Seoul, Korea
* Hwigyeom Kim, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
### Abstract
> For several decades, constructing pseudorandom functions from pseudorandom permutations, so-called Luby-Rackoff backward construction, has been a popular cryptographic problem. Two methods are well-known and comprehensively studied for this problem: summing two random permutations and truncating partial bits of the output from a random permutation. In this paper, by combining both summation and truncation, we propose new Luby-Rackoff backward constructions, dubbed \(\textsf{SaT 1}\) and \(\textsf{SaT 2}\), respectively.
> 
> \(\textsf{SaT 2}\) is obtained by partially truncating output bits from the sum of two independent random permutations, and \(\textsf{SaT 1}\) is its single permutation-based variant using domain separation. The distinguishing advantage against \(\textsf{SaT 1}\) and \(\textsf{SaT 2}\) is upper bounded by \(O({\sqrt{\mu q_{\max }}}/{2^{n-0.5m}})\) and \(O({\sqrt{\mu }q_{\max }^{1.5}}/{2^{2n-0.5m}})\), respectively, in the multi-user setting, where n is the size of the underlying permutation, m is the output size of the construction, \(\mu \) is the number of users, and \(q_{\max }\) is the maximum number of queries per user. We also prove the distinguishing advantage against a variant of \(\mathsf {XORP[3]}\) (studied by Bhattacharya and Nandi at Asiacrypt 2021) using independent permutations, dubbed \(\mathsf {SoP3\hbox {-} 2}\), is upper bounded by \(O({\sqrt{\mu } q_{\max }^2}/{2^{2.5n}})\).
> 
> In the multi-user setting with \(\mu = O(2^{n-m})\), a truncated random permutation provides only the birthday bound security, while \(\textsf{SaT 1}\) and \(\textsf{SaT 2}\) are fully secure, i.e., allowing \(O(2^n)\) queries for each user. It is the same security level as \(\mathsf {XORP[3]}\) using three permutation calls, while \(\textsf{SaT 1}\) and \(\textsf{SaT 2}\) need only two permutation calls.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_23](https://doi.org/10.1007/978-3-031-22966-4_23)
