# Eurocrypt[2023-1]
## Indistinguishable Predictions and Multi-group Fair Learning.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#indistinguishable-predictions-and-multi-group-fair-learning)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#indistinguishable-predictions-and-multi-group-fair-learning)
### Authors
* Guy N. Rothblum, Apple, Cupertino, USA
### Abstract
> Prediction algorithms assign numbers to individuals that are popularly understood as individual “probabilities”—what is the probability that an applicant will repay a loan? Automated predictions increasingly form the basis for life-altering decisions, and this raises a host of concerns. Concerns about the fairness of the resulting predictions are particularly alarming: for example, the predictor might perform poorly on a protected minority group. We survey recent developments in formalizing and addressing such concerns.
> 
> Inspired by the theory of computational indistinguishability, the recently proposed notion of Outcome Indistinguishability (OI) [Dwork et al., STOC 2021] requires that the predicted distribution of outcomes cannot be distinguished from the real-world distribution. Outcome Indistinguishability is a strong requirement for obtaining meaningful predictions. Happily, it can be obtained: techniques from the algorithmic fairness literature [Hebert-Johnson et al., ICML 2018] yield algorithms for learning OI predictors from real-world outcome data.
> 
> Returning to the motivation of addressing fairness concerns, Outcome Indistinguishability can be used to provide robust and general guarantees for protected demographic groups [Rothblum and Yona, ICML 2021]. This gives algorithms that can learn a single predictor that “performs well” for every group in a given rich collection G of overlapping subgroups. Performance is measured using a loss function, which can be quite general and can itself incorporate fairness concerns.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_1](https://doi.org/10.1007/978-3-031-30545-0_1)
## Worst-Case Subexponential Attacks on PRGs of Constant Degree or Constant Locality.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#worst-case-subexponential-attacks-on-prgs-of-constant-degree-or-constant-locality)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#worst-case-subexponential-attacks-on-prgs-of-constant-degree-or-constant-locality)
### Authors
* Akın Ünal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### Abstract
> In this work, we will give new attacks on the pseudorandomness of algebraic pseudorandom number generators (PRGs) of polynomial stretch. Our algorithms apply to a broad class of PRGs and are in the case of general local PRGs faster than currently known attacks. At the same time, in contrast to most algebraic attacks, subexponential time and space bounds will be proven for our attacks without making any assumptions of the PRGs or assuming any further conjectures. Therefore, we yield in this text the first subexponential distinguishing attacks on PRGs from constant-degree polynomials and close current gaps in the subexponential cryptoanalysis of lightweight PRGs.
> 
> Concretely, against PRGs \(F : \mathbb {Z}_q^{n} \rightarrow \mathbb {Z}_q^{m}\) that are computed by polynomials of degree d over a field \(\mathbb {Z}_q\) and have a stretch of \(m = n^{1+e}\) we give an attack with space and time complexities \(n^{O(n^{1 - \frac{e}{d-1}})}\) and noticeable advantage \(1 - {O(n^{1 - \frac{e}{d-1}}/{q})}\). If q lies in \(O(n^{1 - \frac{e}{d-1}})\), we give a second attack with the same space and time complexities whose advantage is at least \(q^{-O(n^{1 - \frac{e}{d-1}})}\). If F is of constant locality d and q is constant, we construct a third attack that has a space and time complexity of \(\exp (O(n^{1 - \frac{e'}{(q-1)d-1}}))\) and noticeable advantage \(1-O(n^{-\frac{e'}{(q-1)d-1}})\) for every constant \(e' < e\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_2](https://doi.org/10.1007/978-3-031-30545-0_2)
## Fine-Grained Non-interactive Key-Exchange: Constructions and Lower Bounds.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#fine-grained-non-interactive-key-exchange-constructions-and-lower-bounds)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#fine-grained-non-interactive-key-exchange-constructions-and-lower-bounds)
### Authors
* Abtin Afshar, University of Virginia, Charlottesville, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Elahe Sadeghi, University of Texas at Austin, Austin, USA
### Abstract
> In this work, we initiate a study of K-NIKE protocols in the fine-grained setting, in which there is a polynomial gap between the running time of the honest parties and that of the adversary. Our goal is to show the possibility, or impossibility, of basing such protocols on weaker assumptions than those of K-NIKE for \(K \ge 3\). Our contribution is threefold.
> 
> We show that random oracles can be used to obtain fine-grained K-NIKE protocols for every constant K. In particular, we show how to generalize Merkle’s two-party protocol to K parties in such a way that the honest parties ask n queries each, while the adversary needs \(n^{K/(K-1)}\) queries to the random oracle to find the key.
> 
> We then improve the security by further using algebraic structures, while avoiding pairings. In particular, we show that there is a 4-party NIKE in Shoup’s generic group model with a quadratic gap between the number of queries by the honest parties vs. that of the adversary.
> 
> Finally, we show a limitation of using purely algebraic methods for obtaining 3-NIKE. In particular, we show that any n-query 3-NIKE protocol in Maurer’s generic group model can be broken by a \(O(n^2)\)-query attacker. Maurer’s GGM is more limited compared with Shoup’s both for the parties and the adversary, as there are no explicit labels for the group elements. Despite being more limited, this model still captures the Diffie Hellman protocol. Prior to our work, it was open to break 3-NIKE protocols in Maurer’s model with any polynomial number of queries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_3](https://doi.org/10.1007/978-3-031-30545-0_3)
## Speak Much, Remember Little: Cryptography in the Bounded Storage Model, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#speak-much-remember-little-cryptography-in-the-bounded-storage-model-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#speak-much-remember-little-cryptography-in-the-bounded-storage-model-revisited)
### Authors
* Yevgeniy Dodis, New York University, New York, NY, 10012, USA
* Willy Quach, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
### Abstract
> The goal of the bounded storage model (BSM) is to construct unconditionally secure cryptographic protocols, by only restricting the storage capacity of the adversary, but otherwise giving it unbounded computational power. Here, we consider a streaming variant of the BSM, where honest parties can stream huge amounts of data to each other so as to overwhelm the adversary’s storage, even while their own storage capacity is significantly smaller than that of the adversary. Prior works showed several impressive results in this model, including key agreement and oblivious transfer, but only as long as adversary’s storage \(m = O(n^2)\) is at most quadratically larger than the honest user storage n. Moreover, the work of Dziembowski and Maurer (DM) also gave a seemingly matching lower bound, showing that key agreement in the BSM is impossible when \(m > n^2\).
> 
> In this work, we observe that the DM lower bound only applies to a significantly more restricted version of the BSM, and does not apply to the streaming variant. Surprisingly, we show that it is possible to construct key agreement and oblivious transfer protocols in the streaming BSM, where the adversary’s storage can be significantly larger, and even exponential \(m = 2^{O(n)}\). The only price of accommodating larger values of m is that the round and communication complexities of our protocols grow accordingly, and we provide lower bounds to show that an increase in rounds and communication is necessary.
> 
> As an added benefit of our work, we also show that our oblivious transfer (OT) protocol in the BSM satisfies a simulation-based notion of security. In contrast, even for the restricted case of \(m = O(n^2)\), prior solutions only satisfied a weaker indistinguishability based definition. As an application of our OT protocol, we get general multiparty computation (MPC) in the BSM that allows for up to exponentially large gaps between m and n, while also achieving simulation-based security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_4](https://doi.org/10.1007/978-3-031-30545-0_4)
## Non-uniformity and Quantum Advice in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#non-uniformity-and-quantum-advice-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#non-uniformity-and-quantum-advice-in-the-quantum-random-oracle-model)
### Authors
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### Abstract
> QROM (quantum random oracle model), introduced by Boneh et al. (Asiacrypt 2011), captures all generic algorithms. However, it fails to describe non-uniform quantum algorithms with preprocessing power, which receives a piece of bounded classical or quantum advice.
> 
> As non-uniform algorithms are largely believed to be the right model for attackers, starting from the work by Nayebi, Aaronson, Belovs, and Trevisan (QIC 2015), a line of works investigates non-uniform security in the random oracle model. Chung, Guo, Liu, and Qian (FOCS 2020) provide a framework and establish non-uniform security for many cryptographic applications. Although they achieve nearly optimal bounds for many applications with classical advice, their bounds for quantum advice are far from tight.
> 
> In this work, we continue the study on quantum advice in the QROM. We provide a new idea that generalizes the previous multi-instance framework, which we believe is more quantum-friendly and should be the quantum analog of multi-instance games. To this end, we match the bounds with quantum advice to those with classical advice by Chung et al., showing quantum advice is almost as good/bad as classical advice for many natural security games in the QROM.
> 
> Finally, we show that for some contrived games in the QROM, quantum advice can be exponentially better than classical advice for some parameter regimes. To our best knowledge, it provides an evidence of a general separation between quantum and classical advice relative to an unstructured oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_5](https://doi.org/10.1007/978-3-031-30545-0_5)
## Black-Box Separations for Non-interactive Classical Commitments in a Quantum World.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#black-box-separations-for-non-interactive-classical-commitments-in-a-quantum-world)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#black-box-separations-for-non-interactive-classical-commitments-in-a-quantum-world)
### Authors
* Kai-Min Chung, Academia Sinica, New Taipei, Taiwan
* Yao-Ting Lin, UCSB, Santa Barbara, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
### Abstract
> Commitments are fundamental in cryptography. In the classical world, commitments are equivalent to the existence of one-way functions. It is also known that the most desired form of commitments in terms of their round complexity, i.e., non-interactive commitments, cannot be built from one-way functions in a black-box way [Mahmoody-Pass, Crypto’12]. However, if one allows the parties to use quantum computation and communication, it is known that non-interactive commitments (to classical bits) are in fact possible [Koshiba-Odaira, Arxiv’11 and Bitansky-Brakerski, TCC’21].
> 
> We revisit the assumptions behind non-interactive commitments in a quantum world and study whether they can be achieved using quantum computation and classical communication based on a black-box use of one-way functions. We prove that doing so is impossible unless the Polynomial Compatibility Conjecture [Austrin et al. Crypto’22] is false. We further extend our impossibility to protocols with quantum decommitments. This complements the positive result of Bitansky and Brakerski [TCC’21], as they only required a classical decommitment message. Because non-interactive commitments can be based on injective one-way functions, assuming the Polynomial Compatibility Conjecture, we also obtain a black-box separation between one-way functions and injective one-way functions (e.g., one-way permutations) even when the construction and the security reductions are allowed to be quantum. This improves the separation of Cao and Xue [Theoretical Computer Science’21] in which they only allowed the security reduction to be quantum.
> 
> At a technical level, we prove that sampling oracles at random from “sufficiently large” sets (of oracles) will make them one-way against polynomial quantum-query adversaries who also get arbitrary polynomial-size quantum advice about the oracle. This gives a natural generalization of the recent results of Hhan et al. [Asiacrypt’19] and Chung et al. [FOCS’20].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_6](https://doi.org/10.1007/978-3-031-30545-0_6)
## On Non-uniform Security for Black-Box Non-interactive CCA Commitments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#on-non-uniform-security-for-black-box-non-interactive-cca-commitments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#on-non-uniform-security-for-black-box-non-interactive-cca-commitments)
### Authors
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, IL, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> We obtain a black-box construction of non-interactive CCA commitments against non-uniform adversaries. This makes black-box use of an appropriate base commitment scheme for small tag spaces, variants of sub-exponential hinting PRG (Koppula and Waters, Crypto 2019) and variants of keyless sub-exponentially collision-resistant hash function with security against non-uniform adversaries (Bitansky, Kalai and Paneth, STOC 2018 and Bitansky and Lin, TCC 2018).
> 
> All prior works on non-interactive non-malleable or CCA commitments without setup first construct a “base” scheme for a relatively small identity/tag space, and then build a tag amplification compiler to obtain commitments for an exponential-sized space of identities. Prior black-box constructions either add multiple rounds of interaction (Goyal, Lee, Ostrovsky and Visconti, FOCS 2012) or only achieve security against uniform adversaries (Garg, Khurana, Lu and Waters, Eurocrypt 2021).
> 
> Our key technical contribution is a novel tag amplification compiler for CCA commitments that replaces the non-interactive proof of consistency required in prior work. Our construction satisfies the strongest known definition of non-malleability, i.e., CCA2 (chosen commitment attack) security. In addition to only making black-box use of the base scheme, our construction replaces sub-exponential NIWIs with sub-exponential hinting PRGs, which can be obtained based on assumptions such as (sub-exponential) CDH or LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_7](https://doi.org/10.1007/978-3-031-30545-0_7)
## Polynomial-Time Cryptanalysis of the Subspace Flooding Assumption for Post-quantum i풪.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#polynomial-time-cryptanalysis-of-the-subspace-flooding-assumption-for-post-quantum-i)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#polynomial-time-cryptanalysis-of-the-subspace-flooding-assumption-for-post-quantum-i)
### Authors
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> Indistinguishability Obfuscation \((i\mathcal {O})\) is a highly versatile primitive implying a myriad advanced cryptographic applications. Up until recently, the state of feasibility of \(i\mathcal {O}\) was unclear, which changed with works (Jain-Lin-Sahai STOC 2021, Jain-Lin-Sahai Eurocrypt 2022) showing that \(i\mathcal {O}\) can be finally based upon well-studied hardness assumptions. Unfortunately, one of these assumptions is broken in quantum polynomial time. Luckily, the line work of Brakerski et al. Eurocrypt 2020, Gay-Pass STOC 2021, Wichs-Wee Eurocrypt 2021, Brakerski et al. ePrint 2021, Devadas et al. TCC 2021 simultaneously created new pathways to construct \(i\mathcal {O}\) with plausible post-quantum security from new assumptions, namely a new form of circular security of LWE in the presence of leakages. At the same time, effective cryptanalysis of this line of work has also begun to emerge (Hopkins et al. Crypto 2021).
> 
> It is important to identify the simplest possible conjectures that yield post-quantum \(i\mathcal {O}\) and can be understood through known cryptanalytic tools. In that spirit, and in light of the cryptanalysis of Hopkins et al., recently Devadas et al. gave an elegant construction of \(i\mathcal {O}\) from a fully-specified and simple-to-state assumption along with a thorough initial cryptanalysis.
> 
> Our work gives a polynomial-time distinguisher on their “final assumption” for their scheme. Our algorithm is extremely simple to describe: Solve a carefully designed linear system arising out of the assumption. The argument of correctness of our algorithm, however, is nontrivial.
> 
> We also analyze the “T-sum” version of the same assumption described by Devadas et al. and under a reasonable conjecture rule out the assumption for any value of T that implies \(i\mathcal {O}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_8](https://doi.org/10.1007/978-3-031-30545-0_8)
## Reverse Firewalls for Oblivious Transfer Extension and Applications to Zero-Knowledge.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#reverse-firewalls-for-oblivious-transfer-extension-and-applications-to-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#reverse-firewalls-for-oblivious-transfer-extension-and-applications-to-zero-knowledge)
### Authors
* Suvradip Chakraborty, Visa Research, Palo Alto, USA
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Pratik Sarkar, Department of Computer Science, Boston University, Boston, USA
### Abstract
> In the setting of subversion, an adversary tampers with the machines of the honest parties thus leaking the honest parties’ secrets through the protocol transcript. The work of Mironov and Stephens-Davidowitz (EUROCRYPT’15) introduced the idea of reverse firewalls (RF) to protect against tampering of honest parties’ machines. All known constructions in the RF framework rely on the malleability of the underlying operations in order for the RF to rerandomize/sanitize the transcript. RFs are thus limited to protocols that offer some structure, and hence based on public-key operations. In this work, we initiate the study of efficient Multiparty Computation (MPC) protocols in the presence of tampering. In this regard,
> 
> We construct the first Oblivious Transfer (OT) extension protocol in the RF setting. We obtain \(\textsf {poly}(\kappa )\) maliciously-secure OTs using \(\mathcal {O}(\kappa )\) public key operations and \(\mathcal {O}(1)\) inexpensive symmetric key operations, where \(\kappa \) is the security parameter.
> 
> We construct the first Zero-knowledge protocol in the RF setting where each multiplication gate can be proven using \(\mathcal {O}(1)\) symmetric key operations. We achieve this using our OT extension protocol and by extending the ZK protocol of Quicksilver (Yang, Sarkar, Weng and Wang, CCS’21) to the RF setting.
> 
> Along the way, we introduce new ideas for malleable interactive proofs that could be of independent interest. We define a notion of full malleability for Sigma protocols that unlike prior notions allow modifying the instance as well, in addition to the transcript. We construct new protocols that satisfy this notion, construct RFs for such protocols and use them in constructing our OT extension.
> 
> The key idea of our work is to demonstrate that correlated randomness may be obtained in an RF-friendly way without having to rerandomize the entire transcript. This enables us to avoid expensive public-key operations that grow with the circuit-size.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_9](https://doi.org/10.1007/978-3-031-30545-0_9)
## Oblivious Transfer with Constant Computational Overhead.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#oblivious-transfer-with-constant-computational-overhead)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#oblivious-transfer-with-constant-computational-overhead)
### Authors
* Elette Boyle, IDC Herzliya and NTT Research, Sunnyvale, USA
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Nicolas Resch, University of Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> The computational overhead of a cryptographic task is the asymptotic ratio between the computational cost of securely realizing the task and that of realizing the task with no security at all.
> 
> Ishai, Kushilevitz, Ostrovsky, and Sahai (STOC 2008) showed that secure two-party computation of Boolean circuits can be realized with constant computational overhead, independent of the desired level of security, assuming the existence of an oblivious transfer (OT) protocol and a local pseudorandom generator (PRG). However, this only applies to the case of semi-honest parties. A central open question in the area is the possibility of a similar result for malicious parties. This question is open even for the simpler task of securely realizing many instances of a constant-size function, such as OT of bits.
> 
> We settle the question in the affirmative for the case of OT, assuming: (1) a standard OT protocol, (2) a slightly stronger “correlation-robust" variant of a local PRG, and (3) a standard sparse variant of the Learning Parity with Noise (LPN) assumption. An optimized version of our construction requires fewer than 100 bit operations per party per bit-OT. For 128-bit security, this improves over the best previous protocols by 1–2 orders of magnitude.
> 
> We achieve this by constructing a constant-overhead pseudorandom correlation generator (PCG) for the bit-OT correlation. Such a PCG generates N pseudorandom instances of bit-OT by locally expanding short, correlated seeds. As a result, we get an end-to-end protocol for generating N pseudorandom instances of bit-OT with o(N) communication, O(N) computation, and security that scales sub-exponentially with N.
> 
> Finally, we present applications of our main result to realizing other secure computation tasks with constant computational overhead. These include protocols for general circuits with a relaxed notion of security against malicious parties, protocols for realizing N instances of natural constant-size functions, and reducing the main open question to a potentially simpler question about fault-tolerant computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_10](https://doi.org/10.1007/978-3-031-30545-0_10)
## Endemic Oblivious Transfer via Random Oracles, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#endemic-oblivious-transfer-via-random-oracles-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#endemic-oblivious-transfer-via-random-oracles-revisited)
### Authors
* Zhelei Zhou, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China
* Zhelei Zhou, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Bingsheng Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### Abstract
> The notion of Endemic Oblivious Transfer (EOT) was introduced by Masny and Rindal (CCS’19). EOT offers a weaker security guarantee than the conventional random OT; namely, the malicious parties can fix their outputs arbitrarily. The authors presented a 1-round UC-secure EOT protocol under a tailor-made and non-standard assumption, Choose-and-Open DDH, in the RO model.
> 
> In this work, we systematically study EOT in the UC/GUC framework. We present a new 1-round UC-secure EOT construction in the RO model under the DDH assumption. Under the GUC framework, we propose the first 1-round EOT construction under the CDH assumption in the Global Restricted Observable RO (GroRO) model proposed by Canetti et al. (CCS’14). We also provide an impossibility result, showing there exist no 1-round GUC-secure EOT protocols in the Global Restricted Programmable RO (GrpRO) model proposed by Camenisch et al. (Eurocrypt’18). Subsequently, we provide the first round-optimal (2-round) EOT protocol with adaptive security under the DDH assumption in the GrpRO model. Finally, we investigate the relations between EOT and other cryptographic primitives.
> 
> As side products, we present the first 2-round GUC-secure commitment in the GroRO model as well as a separation between the GroRO and the GrpRO models, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_11](https://doi.org/10.1007/978-3-031-30545-0_11)
## Half-Tree: Halving the Cost of Tree Expansion in COT and DPF.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#half-tree-halving-the-cost-of-tree-expansion-in-cot-and-dpf)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#half-tree-halving-the-cost-of-tree-expansion-in-cot-and-dpf)
### Authors
* Xiaojie Guo, State Key Laboratory of Cryptology, Beijing, China
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Jiang Zhang, State Key Laboratory of Cryptology, Beijing, China
* Xiaojie Guo, Nankai University, Tianjin, China
* Zheli Liu, Nankai University, Tianjin, China
* Xiao Wang, Northwestern University, Evanston, USA
* Wenhao Zhang, Northwestern University, Evanston, USA
* Xiang Xie, Shanghai Qi Zhi Institute, Shanghai, China
* Xiang Xie, PADO Labs, Hong Kong, China
### Abstract
> GGM tree is widely used in the design of correlated oblivious transfer (COT), subfield vector oblivious linear evaluation (sVOLE), distributed point function (DPF), and distributed comparison function (DCF). Often, the cost associated with GGM tree dominates the computation and communication of these protocols. In this paper, we propose a suite of optimizations that can reduce this cost by half.
> 
> Halving the cost of COT and sVOLE. Our COT protocol introduces extra correlation to each level of a GGM tree used by the state-of-the-art COT protocol. As a result, it reduces both the number of AES calls and the communication by half. Extending this idea to sVOLE, we are able to achieve similar improvement with either halved computation or halved communication.
> 
> Halving the cost of DPF and DCF. We propose improved two-party protocols for the distributed generation of DPF/DCF keys. Our tree structures behind these protocols lead to more efficient full-domain evaluation and halve the communication and the round complexity of the state-of-the-art DPF/DCF protocols.
> 
> All protocols are provably secure in the random-permutation model and can be accelerated based on fixed-key AES-NI. We also improve the state-of-the-art schemes of puncturable pseudorandom function (PPRF), DPF, and DCF, which are of independent interest in dealer-available scenarios.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_12](https://doi.org/10.1007/978-3-031-30545-0_12)
## A New Framework for Quantum Oblivious Transfer.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#a-new-framework-for-quantum-oblivious-transfer)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#a-new-framework-for-quantum-oblivious-transfer)
### Authors
* Amit Agarwal, University of Illinois Urbana-Champaign, Champaign, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Nishant Kumar, University of Illinois Urbana-Champaign, Champaign, USA
* James Bartusek, University of California Berkeley, Berkeley, USA
### Abstract
> We present a new template for building oblivious transfer from quantum information that we call the “fixed basis” framework. Our framework departs from prior work (e.g., Crepeau and Kilian, FOCS’88) by fixing the correct choice of measurement basis used by each player, except for some hidden trap qubits that are intentionally measured in a conjugate basis. We instantiate this template in the quantum random oracle model (QROM) to obtain simple protocols that implement, with security against malicious adversaries:
> 
> Non-interactive random-input bit OT in a model where parties share EPR pairs a priori.
> 
> Two-round random-input bit OT without setup, obtained by showing that the protocol above remains secure even if the (potentially malicious) OT receiver sets up the EPR pairs.
> 
> Three-round chosen-input string OT from BB84 states without entanglement or setup. This improves upon natural variations of the CK88 template that require at least five rounds.
> 
> Along the way, we develop technical tools that may be of independent interest. We prove that natural functions like XOR enable seedless randomness extraction from certain quantum sources of entropy. We also use idealized (i.e. extractable and equivocal) bit commitments, which we obtain by proving security of simple and efficient constructions in the QROM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_13](https://doi.org/10.1007/978-3-031-30545-0_13)
## Optimal Single-Server Private Information Retrieval.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#optimal-single-server-private-information-retrieval)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#optimal-single-server-private-information-retrieval)
### Authors
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Yiannis Tselekounis, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Wei-Kai Lin, Northeastern University, Boston, USA
### Abstract
> We construct a single-server pre-processing Private Information Retrieval (PIR) scheme with optimal bandwidth and server computation (up to poly-logarithmic factors), assuming hardness of the Learning With Errors (LWE) problem. Our scheme achieves amortized \(\widetilde{O}_{\lambda }(\sqrt{n})\) server and client computation and \(\widetilde{O}_\lambda (1)\) bandwidth per query, completes in a single roundtrip, and requires \(\widetilde{O}_\lambda (\sqrt{n})\) client storage. In particular, we achieve a significant reduction in bandwidth over the state-of-the-art scheme by Corrigan-Gibbs, Henzinger, and Kogan (Eurocrypt’22): their scheme requires as much as \(\widetilde{O}_{\lambda }(\sqrt{n})\) bandwidth per query, with comparable computational and storage overhead as ours.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_14](https://doi.org/10.1007/978-3-031-30545-0_14)
## Weighted Oblivious RAM, with Applications to Searchable Symmetric Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#weighted-oblivious-ram-with-applications-to-searchable-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#weighted-oblivious-ram-with-applications-to-searchable-symmetric-encryption)
### Authors
* Léonard Assouline, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
* Brice Minaud, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
### Abstract
> Existing Oblivious RAM protocols do not support the storage of data items of variable size in a non-trivial way. While the study of ORAM for items of variable size is of interest in and of itself, it is also motivated by the need for more performant and more secure Searchable Symmetric Encryption (SSE) schemes.
> 
> In this article, we introduce the notion of weighted ORAM, which supports the storage of blocks of different sizes. We introduce a framework to build efficient weighted ORAM schemes, based on an underlying standard ORAM satisfying a certain suitability criterion. This criterion is fulfilled by various Tree ORAM schemes, including Simple ORAM and Path ORAM. We deduce several instantiations of weighted ORAM, with very little overhead compared to standard ORAM. As a direct application, we obtain efficient SSE constructions with attractive security properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_15](https://doi.org/10.1007/978-3-031-30545-0_15)
## NanoGRAM: Garbled RAM with $\widetilde{O}(\log N)$ Overhead.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#nanogram-garbled-ram-with-widetilde-o-log-n-overhead)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#nanogram-garbled-ram-with-widetilde-o-log-n-overhead)
### Authors
* Andrew Park, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Wei-Kai Lin, Northeastern University, Boston, USA
### Abstract
> We propose a new garbled RAM construction called NanoGRAM, which achieves an amortized cost of \(\widetilde{O}(\lambda \cdot (W \log N + \log ^3 N))\) bits per memory access, where \(\lambda \) is the security parameter, W is the block size, and N is the total number of blocks, and \(\widetilde{O}(\cdot )\) hides \({\textsf{poly}} \log \log \) factors. For sufficiently large blocks where \(W = \varOmega (\log ^2 N)\), our scheme achieves \(\widetilde{O}(\lambda \cdot W \log N)\) cost per memory access, where the dependence on N is optimal (barring \({\textsf{poly}} \log \log \) factors), in terms of the evaluator’s runtime. Our asymptotical performance matches even the interactive state-of-the-art (modulo \({\textsf{poly}} \log \log \) factors), that is, running Circuit ORAM atop garbled circuit, and yet we remove the logarithmic number of interactions necessary in this baseline. Furthermore, we achieve asymptotical improvement over the recent work of Heath et al. (Eurocrypt ’22). Our scheme adopts the same assumptions as the mainstream literature on practical garbled circuits, i.e., circular correlation-robust hashes or a random oracle. We evaluate the concrete performance of NanoGRAM and compare it with a couple of baselines that are asymptotically less efficient. We show that NanoGRAM starts to outperform the naïve linear-scan garbled RAM at a memory size of \(N = 2^9\) and starts to outperform the recent construction of Heath et al. at \(N = 2^{13}\).
> 
> Finally, as a by product, we also show the existence of a garbled RAM scheme assuming only one-way functions, with an amortized cost of \(\widetilde{O}(\lambda ^2 \cdot (W \log N + \log ^3 N))\) per memory access. Again, the dependence on N is nearly optimal for blocks of size \(W = \varOmega (\log ^2 N)\) bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_16](https://doi.org/10.1007/978-3-031-30545-0_16)
## Lower Bound Framework for Differentially Private and Oblivious Data Structures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#lower-bound-framework-for-differentially-private-and-oblivious-data-structures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#lower-bound-framework-for-differentially-private-and-oblivious-data-structures)
### Authors
* Giuseppe Persiano, Universitá di Salerno and Google, Fisciano, Italy
* Kevin Yeo, Google and Columbia University, New York, USA
### Abstract
> In recent years, there has been significant work in studying data structures that provide privacy for the operations that are executed. These primitives aim to guarantee that observable access patterns to physical memory do not reveal substantial information about the queries and updates executed on the data structure. Multiple recent works, including Larsen and Nielsen [Crypto’18], Persiano and Yeo [Eurocrypt’19], Hubáček et al. [TCC’19] and Komargodski and Lin [Crypto’21], have shown that logarithmic overhead is required to support even basic RAM (array) operations for various privacy notions including obliviousness and differential privacy as well as different choices of sizes for RAM blocks b and memory cells \(\omega \).
> 
> We continue along this line of work and present the first logarithmic lower bounds for differentially private RAMs (DPRAMs) that apply regardless of the sizes of blocks b and cells \(\omega \). This is the first logarithmic lower bounds for DPRAMs when blocks are significantly smaller than cells, that is \(b \ll \omega \). Furthermore, we present new logarithmic lower bounds for differentially private variants of classical data structure problems including sets, predecessor (successor) and disjoint sets (union-find) for which sub-logarithmic plaintext constructions are known. All our lower bounds extend to the multiple non-colluding servers setting.
> 
> We also address an unfortunate issue with this rich line of work where the lower bound techniques are difficult to use and require customization for each new result. To make the techniques more accessible, we generalize our proofs into a framework that reduces proving logarithmic lower bounds to showing that a specific problem satisfies two simple, minimal conditions. We show our framework is easy-to-use as all the lower bounds in our paper utilize the framework and hope our framework will spur more usage of these lower bound techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_17](https://doi.org/10.1007/978-3-031-30545-0_17)
## Lower Bounds for (Batch) PIR with Private Preprocessing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#lower-bounds-for-batch-pir-with-private-preprocessing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#lower-bounds-for-batch-pir-with-private-preprocessing)
### Authors
* Kevin Yeo, Google and Columbia University, New York, USA
### Abstract
> In this paper, we study (batch) private information retrieval with private preprocessing. Private information retrieval (PIR) is the problem where one or more servers hold a database of n bits and a client wishes to retrieve the i-th bit in the database from the server(s). In PIR with private preprocessing (also known as offline-online PIR), the client is able to compute a private r-bit hint in an offline stage that may be leveraged to perform retrievals accessing at most t entries. For privacy, the client wishes to hide index i from an adversary that has compromised some of the servers. In the batch PIR setting, the client performs queries to retrieve the contents of multiple entries simultaneously.
> 
> We present a tight characterization for the trade-offs between hint size r and number of accessed entries t during queries. For any PIR scheme that enables clients to perform batch retrievals of k entries, we prove a lower bound of \(tr = \varOmega (nk)\) when \(r \ge k\). When \(r < k\), we prove that \(t = \varOmega (n)\). Our lower bounds hold when the scheme errs with probability at most 1/15 and against PPT adversaries that only compromise one out of \(\ell \) servers for any \(\ell = O(1)\). Our work also closes the multiplicative logarithmic gap for the single query setting \((k = 1)\) as our lower bound matches known constructions. Our lower bounds hold in the model where each database entry is stored without modification but each entry may be replicated arbitrarily.
> 
> Finally, we show connections between PIR and the online matrix-vector (\(\textsf{OMV}\)) conjecture from fine-grained complexity. We present barriers for proving lower bounds for two-server PIR schemes in general computational models as they would immediately imply the \(\textsf{OMV}\) conjecture.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_18](https://doi.org/10.1007/978-3-031-30545-0_18)
## How to Compress Encrypted Data.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#how-to-compress-encrypted-data)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#how-to-compress-encrypted-data)
### Authors
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Kasper Green Larsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### Abstract
> We study the task of obliviously compressing a vector comprised of n ciphertexts of size \(\xi \) bits each, where at most t of the corresponding plaintexts are non-zero. This problem commonly features in applications involving encrypted outsourced storages, such as searchable encryption or oblivious message retrieval. We present two new algorithms with provable worst-case guarantees, solving this problem by using only homomorphic additions and multiplications by constants. Both of our new constructions improve upon the state of the art asymptotically and concretely.
> 
> Our first construction, based on sparse polynomials, is perfectly correct and the first to achieve an asymptotically optimal compression rate by compressing the input vector into \(\mathcal {O}({t \xi })\) bits. Compression can be performed homomorphically by performing \(\mathcal {O}({n \log n})\) homomorphic additions and multiplications by constants. The main drawback of this construction is a decoding complexity of \(\varOmega (\sqrt{n})\).
> 
> Our second construction is based on a novel variant of invertible bloom lookup tables and is correct with probability \(1-2^{-\kappa }\). It has a slightly worse compression rate compared to our first construction as it compresses the input vector into \(\mathcal {O}({\xi \kappa t /\log t})\) bits, where \(\kappa \ge \log t\). In exchange, both compression and decompression of this construction are highly efficient. The compression complexity is dominated by \(\mathcal {O}({n \kappa /\log t})\) homomorphic additions and multiplications by constants. The decompression complexity is dominated by \(\mathcal {O}({\kappa t /\log t})\) decryption operations and equally many inversions of a pseudorandom permutation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_19](https://doi.org/10.1007/978-3-031-30545-0_19)
## Public Key Encryption with Secure Key Leasing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#public-key-encryption-with-secure-key-leasing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#public-key-encryption-with-secure-key-leasing)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> We introduce the notion of public key encryption with secure key leasing (PKE-SKL). Our notion supports the leasing of decryption keys so that a leased key achieves the decryption functionality but comes with the guarantee that if the quantum decryption key returned by a user passes a validity test, then the user has lost the ability to decrypt. Our notion is similar in spirit to the notion of secure software leasing (SSL) introduced by Ananth and La Placa (Eurocrypt 2021) but captures significantly more general adversarial strategies. (In more detail, our adversary is not restricted to use an honest evaluation algorithm to run pirated software.) Our results can be summarized as follows:
> 
> 1. Definitions: We introduce the definition of PKE with secure key leasing and formalize a security notion that we call indistinguishability against key leasing attacks (IND-KLA security). We also define a one-wayness notion for PKE-SKL that we call OW-KLA security and show that an OW-KLA secure PKE-SKL scheme can be lifted to an IND-KLA secure one by using the (quantum) Goldreich-Levin lemma.
> 
> 2. Constructing IND-KLA PKE with Secure Key Leasing: We provide a construction of OW-KLA secure PKE-SKL (which implies IND-KLA secure PKE-SKL as discussed above) by leveraging a PKE scheme that satisfies a new security notion that we call consistent or inconsistent security against key leasing attacks (CoIC-KLA security). We then construct a CoIC-KLA secure PKE scheme using 1-key Ciphertext-Policy Functional Encryption (CPFE) that in turn can be based on any IND-CPA secure PKE scheme.
> 
> 3. Identity Based Encryption, Attribute Based Encryption and Functional Encryption with Secure Key Leasing: We provide definitions of secure key leasing in the context of advanced encryption schemes such as identity based encryption (IBE), attribute-based encryption (ABE) and functional encryption (FE). Then we provide constructions by combining the above PKE-SKL with standard IBE, ABE and FE schemes. Notably, our definitions allow the adversary to request distinguishing keys in the security game, namely, keys that distinguish the challenge bit by simply decrypting the challenge ciphertext, as long as it returns them (and they pass the validity test) before it sees the challenge ciphertext. All our constructions satisfy this stronger definition, albeit with the restriction that only a bounded number of such keys is allowed to the adversary in the IBE and ABE (but not FE) security games.
> 
> Prior to our work, the notion of single decryptor encryption (SDE) has been studied in the context of PKE (Georgiou and Zhandry, Eprint 2020) and FE (Kitigawa and Nishimaki, Asiacrypt 2022) but all their constructions rely on strong assumptions including indistinguishability obfuscation. In contrast, our constructions do not require any additional assumptions, showing that PKE/IBE/ABE/FE can be upgraded to support secure key leasing for free.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_20](https://doi.org/10.1007/978-3-031-30545-0_20)
## Another Round of Breaking and Making Quantum Money: - How to Not Build It from Lattices, and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#another-round-of-breaking-and-making-quantum-money-how-to-not-build-it-from-lattices-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#another-round-of-breaking-and-making-quantum-money-how-to-not-build-it-from-lattices-and-more)
### Authors
* Jiahui Liu, University of Texas at Austin, Austin, USA
* Hart Montgomery, Linux Foundation, San Francisco, USA
* Mark Zhandry, NTT and Princeton University, Princeton, USA
### Abstract
> This work provides both negative and positive results for publicly verifiable quantum money.
> 
> In the first part, we give a general theorem, showing that a certain natural class of quantum money schemes from lattices cannot be secure. We use this theorem to break the recent quantum money proposal of Khesin, Lu, and Shor ([KLS22]).
> 
> In the second part, we propose a framework for building quantum money and quantum lightning we call invariant money which abstracts and formalizes some ideas of quantum money from knots [FGH+12] and its precedent work [LAF+10]. In addition to formalizing this framework, we provide concrete hard computational problems loosely inspired by classical knowledge-of-exponent assumptions, whose hardness would imply the security of quantum lightning, a strengthening of quantum money where not even the bank can duplicate banknotes.
> 
> We discuss potential instantiations of our framework, including an oracle construction using cryptographic group actions and instantiations from rerandomizable functional encryption, isogenies over elliptic curves, and knots.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_21](https://doi.org/10.1007/978-3-031-30545-0_21)
## From the Hardness of Detecting Superpositions to Cryptography: Quantum Public Key Encryption and Commitments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#from-the-hardness-of-detecting-superpositions-to-cryptography-quantum-public-key-encryption-and-commitments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#from-the-hardness-of-detecting-superpositions-to-cryptography-quantum-public-key-encryption-and-commitments)
### Authors
* Minki Hhan, KIAS, Seoul, Republic of Korea
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Recently, Aaronson et al. (arXiv:2009.07450) showed that detecting interference between two orthogonal states is as hard as swapping these states. While their original motivation was from quantum gravity, we show its applications in quantum cryptography.
> 
> 1. We construct the first public key encryption scheme from cryptographic non-abelian group actions. Interestingly, the ciphertexts of our scheme are quantum even if messages are classical. This resolves an open question posed by Ji et al. (TCC ’19). We construct the scheme through a new abstraction called swap-trapdoor function pairs, which may be of independent interest.
> 
> 2. We give a simple and efficient compiler that converts the flavor of quantum bit commitments. More precisely, for any prefix \(\textrm{X},\textrm{Y}\in \{\text {computationally, statistically, perfectly}\}\), if the base scheme is X-hiding and Y-binding, then the resulting scheme is Y-hiding and X-binding. Our compiler calls the base scheme only once. Previously, all known compilers call the base schemes polynomially many times (Crépeau et al., Eurocrypt ’01 and Yan, Asiacrypt ’22). For the security proof of the conversion, we generalize the result of Aaronson et al. by considering quantum auxiliary inputs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_22](https://doi.org/10.1007/978-3-031-30545-0_22)
